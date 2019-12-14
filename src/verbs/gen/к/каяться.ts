import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const каяться: PerfectVerb = {
  name: Word('каяться', 1),
  singular1stPerson: Word('каюсь', 1),
  singular2ndPerson: Word('каешься', 1),
  singular3rdPerson: Word('кается', 1),
  plural1stPerson: Word('каемся', 1),
  plural2ndPerson: Word('каетесь', 1),
  plural3rdPerson: Word('каются', 1),
  masculinePast: Word('каялся', 1),
  femininePast: Word('каялась', 1),
  neuterPast: Word('каялось', 1),
  pluralPast: Word('каялись', 1),
  imperativeInformal: Word('кайся', 1),
  imperativeFormal: Word('кайтесь', 1),
  imperfect: ['покаяться','раскаяться'],
};

perfectVerbs.set(каяться.name.text, каяться);

export { каяться };