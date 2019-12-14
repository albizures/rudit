import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подменить: PerfectVerb = {
  name: Word('подменить', 6),
  singular1stPerson: Word('подменю', 6),
  singular2ndPerson: Word('подменишь', 4),
  singular3rdPerson: Word('подменит', 4),
  plural1stPerson: Word('подменим', 4),
  plural2ndPerson: Word('подмените', 4),
  plural3rdPerson: Word('подменят', 4),
  masculinePast: Word('подменил', 6),
  femininePast: Word('подменила', 6),
  neuterPast: Word('подменило', 6),
  pluralPast: Word('подменили', 6),
  imperativeInformal: Word('подмени', 6),
  imperativeFormal: Word('подмените', 6),
  imperfect: [],
};

perfectVerbs.set(подменить.name.text, подменить);

export { подменить };