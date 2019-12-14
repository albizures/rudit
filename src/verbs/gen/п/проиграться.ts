import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проиграться: PerfectVerb = {
  name: Word('проиграться', 6),
  singular1stPerson: Word('проиграюсь', 6),
  singular2ndPerson: Word('проиграешься', 6),
  singular3rdPerson: Word('проиграется', 6),
  plural1stPerson: Word('проиграемся', 6),
  plural2ndPerson: Word('проиграетесь', 6),
  plural3rdPerson: Word('проиграются', 6),
  masculinePast: Word('проигрался', 6),
  femininePast: Word('проигралась', 6),
  neuterPast: Word('проигралось', 6),
  pluralPast: Word('проигрались', 6),
  imperativeInformal: Word('проиграйся', 6),
  imperativeFormal: Word('проиграйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проиграться.name.text, проиграться);

export { проиграться };