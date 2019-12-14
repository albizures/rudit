import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const краснеться: PerfectVerb = {
  name: Word('краснеться', 5),
  singular1stPerson: Word('краснеюсь', 5),
  singular2ndPerson: Word('краснеешься', 5),
  singular3rdPerson: Word('краснеется', 5),
  plural1stPerson: Word('краснеемся', 5),
  plural2ndPerson: Word('краснеетесь', 5),
  plural3rdPerson: Word('краснеются', 5),
  masculinePast: Word('краснелся', 5),
  femininePast: Word('краснелась', 5),
  neuterPast: Word('краснелось', 5),
  pluralPast: Word('краснелись', 5),
  imperativeInformal: Word('краснейся', 5),
  imperativeFormal: Word('краснейтесь', 5),
  imperfect: ['покраснеться'],
};

perfectVerbs.set(краснеться.name.text, краснеться);

export { краснеться };