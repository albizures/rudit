import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенапрягаться: PerfectVerb = {
  name: Word('перенапрягаться', 10),
  singular1stPerson: Word('перенапрягаюсь', 10),
  singular2ndPerson: Word('перенапрягаешься', 10),
  singular3rdPerson: Word('перенапрягается', 10),
  plural1stPerson: Word('перенапрягаемся', 10),
  plural2ndPerson: Word('перенапрягаетесь', 10),
  plural3rdPerson: Word('перенапрягаются', 10),
  masculinePast: Word('перенапрягался', 10),
  femininePast: Word('перенапрягалась', 10),
  neuterPast: Word('перенапрягалось', 10),
  pluralPast: Word('перенапрягались', 10),
  imperativeInformal: Word('перенапрягайся', 10),
  imperativeFormal: Word('перенапрягайтесь', 10),
  imperfect: [],
};

perfectVerbs.set(перенапрягаться.name.text, перенапрягаться);

export { перенапрягаться };