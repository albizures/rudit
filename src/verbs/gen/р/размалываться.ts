import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размалываться: PerfectVerb = {
  name: Word('размалываться', 4),
  singular1stPerson: Word('размалываюсь', 4),
  singular2ndPerson: Word('размалываешься', 4),
  singular3rdPerson: Word('размалывается', 4),
  plural1stPerson: Word('размалываемся', 4),
  plural2ndPerson: Word('размалываетесь', 4),
  plural3rdPerson: Word('размалываются', 4),
  masculinePast: Word('размалывался', 4),
  femininePast: Word('размалывалась', 4),
  neuterPast: Word('размалывалось', 4),
  pluralPast: Word('размалывались', 4),
  imperativeInformal: Word('размалывайся', 4),
  imperativeFormal: Word('размалывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(размалываться.name.text, размалываться);

export { размалываться };