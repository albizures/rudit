import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввязаться: PerfectVerb = {
  name: Word('ввязаться', 4),
  singular1stPerson: Word('ввяжусь', 4),
  singular2ndPerson: Word('ввяжешься', 2),
  singular3rdPerson: Word('ввяжется', 2),
  plural1stPerson: Word('ввяжемся', 2),
  plural2ndPerson: Word('ввяжетесь', 2),
  plural3rdPerson: Word('ввяжутся', 2),
  masculinePast: Word('ввязался', 4),
  femininePast: Word('ввязалась', 4),
  neuterPast: Word('ввязалось', 4),
  pluralPast: Word('ввязались', 4),
  imperativeInformal: Word('ввяжись', 4),
  imperativeFormal: Word('ввяжитесь', 4),
  imperfect: [],
};

perfectVerbs.set(ввязаться.name.text, ввязаться);

export { ввязаться };