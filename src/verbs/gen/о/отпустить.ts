import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпустить: PerfectVerb = {
  name: Word('отпустить', 6),
  singular1stPerson: Word('отпущу', 5),
  singular2ndPerson: Word('отпустишь', 3),
  singular3rdPerson: Word('отпустит', 3),
  plural1stPerson: Word('отпустим', 3),
  plural2ndPerson: Word('отпустите', 3),
  plural3rdPerson: Word('отпустят', 3),
  masculinePast: Word('отпустил', 6),
  femininePast: Word('отпустила', 6),
  neuterPast: Word('отпустило', 6),
  pluralPast: Word('отпустили', 6),
  imperativeInformal: Word('отпусти', 6),
  imperativeFormal: Word('отпустите', 6),
  imperfect: ['отпускать'],
};

perfectVerbs.set(отпустить.name.text, отпустить);

export { отпустить };