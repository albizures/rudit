import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провороваться: PerfectVerb = {
  name: Word('провороваться', 8),
  singular1stPerson: Word('проворуюсь', 6),
  singular2ndPerson: Word('проворуешься', 6),
  singular3rdPerson: Word('проворуется', 6),
  plural1stPerson: Word('проворуемся', 6),
  plural2ndPerson: Word('проворуетесь', 6),
  plural3rdPerson: Word('проворуются', 6),
  masculinePast: Word('проворовался', 8),
  femininePast: Word('проворовалась', 8),
  neuterPast: Word('проворовалось', 8),
  pluralPast: Word('проворовались', 8),
  imperativeInformal: Word('проворуйся', 6),
  imperativeFormal: Word('проворуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(провороваться.name.text, провороваться);

export { провороваться };