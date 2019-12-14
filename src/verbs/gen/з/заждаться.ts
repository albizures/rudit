import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заждаться: PerfectVerb = {
  name: Word('заждаться', 4),
  singular1stPerson: Word('заждусь', 4),
  singular2ndPerson: Word('заждёшься', 1),
  singular3rdPerson: Word('заждётся', 1),
  plural1stPerson: Word('заждёмся', 1),
  plural2ndPerson: Word('заждётесь', 1),
  plural3rdPerson: Word('заждутся', 4),
  masculinePast: Word('заждался', 4),
  femininePast: Word('заждалась', 6),
  neuterPast: Word('заждалось//заждало'сь', 4),
  pluralPast: Word('заждались//заждали'сь', 4),
  imperativeInformal: Word('заждись', 4),
  imperativeFormal: Word('заждитесь', 4),
  imperfect: [],
};

perfectVerbs.set(заждаться.name.text, заждаться);

export { заждаться };