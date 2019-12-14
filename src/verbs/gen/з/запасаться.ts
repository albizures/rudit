import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запасаться: PerfectVerb = {
  name: Word('запасаться', 5),
  singular1stPerson: Word('запасаюсь', 5),
  singular2ndPerson: Word('запасаешься', 5),
  singular3rdPerson: Word('запасается', 5),
  plural1stPerson: Word('запасаемся', 5),
  plural2ndPerson: Word('запасаетесь', 5),
  plural3rdPerson: Word('запасаются', 5),
  masculinePast: Word('запасался', 5),
  femininePast: Word('запасалась', 5),
  neuterPast: Word('запасалось', 5),
  pluralPast: Word('запасались', 5),
  imperativeInformal: Word('запасайся', 5),
  imperativeFormal: Word('запасайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(запасаться.name.text, запасаться);

export { запасаться };