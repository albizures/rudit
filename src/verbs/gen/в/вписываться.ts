import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вписываться: PerfectVerb = {
  name: Word('вписываться', 2),
  singular1stPerson: Word('вписываюсь', 2),
  singular2ndPerson: Word('вписываешься', 2),
  singular3rdPerson: Word('вписывается', 2),
  plural1stPerson: Word('вписываемся', 2),
  plural2ndPerson: Word('вписываетесь', 2),
  plural3rdPerson: Word('вписываются', 2),
  masculinePast: Word('вписывался', 2),
  femininePast: Word('вписывалась', 2),
  neuterPast: Word('вписывалось', 2),
  pluralPast: Word('вписывались', 2),
  imperativeInformal: Word('вписывайся', 2),
  imperativeFormal: Word('вписывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вписываться.name.text, вписываться);

export { вписываться };