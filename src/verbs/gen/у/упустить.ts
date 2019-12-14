import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упустить: PerfectVerb = {
  name: Word('упустить', 5),
  singular1stPerson: Word('упущу', 4),
  singular2ndPerson: Word('упустишь', 2),
  singular3rdPerson: Word('упустит', 2),
  plural1stPerson: Word('упустим', 2),
  plural2ndPerson: Word('упустите', 2),
  plural3rdPerson: Word('упустят', 2),
  masculinePast: Word('упустил', 5),
  femininePast: Word('упустила', 5),
  neuterPast: Word('упустило', 5),
  pluralPast: Word('упустили', 5),
  imperativeInformal: Word('упусти', 5),
  imperativeFormal: Word('упустите', 5),
  imperfect: ['упускать'],
};

perfectVerbs.set(упустить.name.text, упустить);

export { упустить };