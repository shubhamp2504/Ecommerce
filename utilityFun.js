exports.isPrime = function(x)
{
    for( i =2 ;i<x ;i++)
    {
        if(x/i == 0)
        {
            return false;
        }
        else 
        return true;
    }
};

exports.calFact = function(x){
    fact =1;

    while(x>0)
    {
        fact= fact*x;
        x--;
    }
    return fact;

};


exports.isPerfect = function(x)
{
    sum = 1;

    for ( i=2; i*i<=x; i++)
        {
            if (x%i==0)
                {
                    if(i*i!=x)
                    sum = sum + i + x/i;
                    else
                    sum=sum+i;
                }
        }

        if (sum == x && x != 1)
        return true;
        else
        return false;
}