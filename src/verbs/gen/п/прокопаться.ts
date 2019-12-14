import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокопаться: PerfectVerb = {
  name: Word('прокопаться', 6),
  singular1stPerson: Word('прокопаюсь', 6),
  singular2ndPerson: Word('прокопаешься', 6),
  singular3rdPerson: Word('прокопается', 6),
  plural1stPerson: Word('прокопаемся', 6),
  plural2ndPerson: Word('прокопаетесь', 6),
  plural3rdPerson: Word('прокопаются', 6),
  masculinePast: Word('прокопался', 6),
  femininePast: Word('прокопалась', 6),
  neuterPast: Word('прокопалось', 6),
  pluralPast: Word('прокопались', 6),
  imperativeInformal: Word('прокопайся', 6),
  imperativeFormal: Word('прокопайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прокопаться.name.text, прокопаться);

export { прокопаться };