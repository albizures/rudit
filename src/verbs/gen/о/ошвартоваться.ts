import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошвартоваться: PerfectVerb = {
  name: Word('ошвартоваться', 8),
  singular1stPerson: Word('ошвартуюсь', 6),
  singular2ndPerson: Word('ошвартуешься', 6),
  singular3rdPerson: Word('ошвартуется', 6),
  plural1stPerson: Word('ошвартуемся', 6),
  plural2ndPerson: Word('ошвартуетесь', 6),
  plural3rdPerson: Word('ошвартуются', 6),
  masculinePast: Word('ошвартовался', 8),
  femininePast: Word('ошвартовалась', 8),
  neuterPast: Word('ошвартовалось', 8),
  pluralPast: Word('ошвартовались', 8),
  imperativeInformal: Word('ошвартуйся', 6),
  imperativeFormal: Word('ошвартуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(ошвартоваться.name.text, ошвартоваться);

export { ошвартоваться };