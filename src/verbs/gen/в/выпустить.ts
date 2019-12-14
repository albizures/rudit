import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпустить: PerfectVerb = {
  name: Word('выпустить', 1),
  singular1stPerson: Word('выпущу', 1),
  singular2ndPerson: Word('выпустишь', 1),
  singular3rdPerson: Word('выпустит', 1),
  plural1stPerson: Word('выпустим', 1),
  plural2ndPerson: Word('выпустите', 1),
  plural3rdPerson: Word('выпустят', 1),
  masculinePast: Word('выпустил', 1),
  femininePast: Word('выпустила', 1),
  neuterPast: Word('выпустило', 1),
  pluralPast: Word('выпустили', 1),
  imperativeInformal: Word('выпусти', 1),
  imperativeFormal: Word('выпустите', 1),
  imperfect: ['выпускать'],
};

perfectVerbs.set(выпустить.name.text, выпустить);

export { выпустить };