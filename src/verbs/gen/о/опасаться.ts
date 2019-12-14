import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опасаться: PerfectVerb = {
  name: Word('опасаться', 4),
  singular1stPerson: Word('опасаюсь', 4),
  singular2ndPerson: Word('опасаешься', 4),
  singular3rdPerson: Word('опасается', 4),
  plural1stPerson: Word('опасаемся', 4),
  plural2ndPerson: Word('опасаетесь', 4),
  plural3rdPerson: Word('опасаются', 4),
  masculinePast: Word('опасался', 4),
  femininePast: Word('опасалась', 4),
  neuterPast: Word('опасалось', 4),
  pluralPast: Word('опасались', 4),
  imperativeInformal: Word('опасайся', 4),
  imperativeFormal: Word('опасайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(опасаться.name.text, опасаться);

export { опасаться };