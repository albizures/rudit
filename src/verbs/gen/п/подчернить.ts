import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчернить: PerfectVerb = {
  name: Word('подчернить', 7),
  singular1stPerson: Word('подчерню', 7),
  singular2ndPerson: Word('подчернишь', 7),
  singular3rdPerson: Word('подчернит', 7),
  plural1stPerson: Word('подчерним', 7),
  plural2ndPerson: Word('подчерните', 7),
  plural3rdPerson: Word('подчернят', 7),
  masculinePast: Word('подчернил', 7),
  femininePast: Word('подчернила', 7),
  neuterPast: Word('подчернило', 7),
  pluralPast: Word('подчернили', 7),
  imperativeInformal: Word('подчерни', 7),
  imperativeFormal: Word('подчерните', 7),
  imperfect: [],
};

perfectVerbs.set(подчернить.name.text, подчернить);

export { подчернить };