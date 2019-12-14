import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпалить: PerfectVerb = {
  name: Word('подпалить', 6),
  singular1stPerson: Word('подпалю', 6),
  singular2ndPerson: Word('подпалишь', 6),
  singular3rdPerson: Word('подпалит', 6),
  plural1stPerson: Word('подпалим', 6),
  plural2ndPerson: Word('подпалите', 6),
  plural3rdPerson: Word('подпалят', 6),
  masculinePast: Word('подпалил', 6),
  femininePast: Word('подпалила', 6),
  neuterPast: Word('подпалило', 6),
  pluralPast: Word('подпалили', 6),
  imperativeInformal: Word('подпали', 6),
  imperativeFormal: Word('подпалите', 6),
  imperfect: [],
};

perfectVerbs.set(подпалить.name.text, подпалить);

export { подпалить };