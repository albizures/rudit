import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкрепить: PerfectVerb = {
  name: Word('подкрепить', 7),
  singular1stPerson: Word('подкреплю', 8),
  singular2ndPerson: Word('подкрепишь', 7),
  singular3rdPerson: Word('подкрепит', 7),
  plural1stPerson: Word('подкрепим', 7),
  plural2ndPerson: Word('подкрепите', 7),
  plural3rdPerson: Word('подкрепят', 7),
  masculinePast: Word('подкрепил', 7),
  femininePast: Word('подкрепила', 7),
  neuterPast: Word('подкрепило', 7),
  pluralPast: Word('подкрепили', 7),
  imperativeInformal: Word('подкрепи', 7),
  imperativeFormal: Word('подкрепите', 7),
  imperfect: [],
};

perfectVerbs.set(подкрепить.name.text, подкрепить);

export { подкрепить };