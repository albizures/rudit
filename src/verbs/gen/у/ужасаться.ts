import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужасаться: PerfectVerb = {
  name: Word('ужасаться', 4),
  singular1stPerson: Word('ужасаюсь', 4),
  singular2ndPerson: Word('ужасаешься', 4),
  singular3rdPerson: Word('ужасается', 4),
  plural1stPerson: Word('ужасаемся', 4),
  plural2ndPerson: Word('ужасаетесь', 4),
  plural3rdPerson: Word('ужасаются', 4),
  masculinePast: Word('ужасался', 4),
  femininePast: Word('ужасалась', 4),
  neuterPast: Word('ужасалось', 4),
  pluralPast: Word('ужасались', 4),
  imperativeInformal: Word('ужасайся', 4),
  imperativeFormal: Word('ужасайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ужасаться.name.text, ужасаться);

export { ужасаться };