import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришвартоваться: PerfectVerb = {
  name: Word('пришвартоваться', 10),
  singular1stPerson: Word('пришвартуюсь', 8),
  singular2ndPerson: Word('пришвартуешься', 8),
  singular3rdPerson: Word('пришвартуется', 8),
  plural1stPerson: Word('пришвартуемся', 8),
  plural2ndPerson: Word('пришвартуетесь', 8),
  plural3rdPerson: Word('пришвартуются', 8),
  masculinePast: Word('пришвартовался', 10),
  femininePast: Word('пришвартовалась', 10),
  neuterPast: Word('пришвартовалось', 10),
  pluralPast: Word('пришвартовались', 10),
  imperativeInformal: Word('пришвартуйся', 8),
  imperativeFormal: Word('пришвартуйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(пришвартоваться.name.text, пришвартоваться);

export { пришвартоваться };