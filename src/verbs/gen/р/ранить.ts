import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ранить: PerfectVerb = {
  name: Word('ранить', 1),
  singular1stPerson: Word('раню', 1),
  singular2ndPerson: Word('ранишь', 1),
  singular3rdPerson: Word('ранит', 1),
  plural1stPerson: Word('раним', 1),
  plural2ndPerson: Word('раните', 1),
  plural3rdPerson: Word('ранят', 1),
  masculinePast: Word('ранил', 1),
  femininePast: Word('ранила', 1),
  neuterPast: Word('ранило', 1),
  pluralPast: Word('ранили', 1),
  imperativeInformal: Word('рань', 1),
  imperativeFormal: Word('раньте', 1),
  imperfect: [],
};

perfectVerbs.set(ранить.name.text, ранить);

export { ранить };