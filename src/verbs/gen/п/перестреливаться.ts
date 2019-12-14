import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестреливаться: PerfectVerb = {
  name: Word('перестреливаться', 7),
  singular1stPerson: Word('перестреливаюсь', 7),
  singular2ndPerson: Word('перестреливаешься', 7),
  singular3rdPerson: Word('перестреливается', 7),
  plural1stPerson: Word('перестреливаемся', 7),
  plural2ndPerson: Word('перестреливаетесь', 7),
  plural3rdPerson: Word('перестреливаются', 7),
  masculinePast: Word('перестреливался', 7),
  femininePast: Word('перестреливалась', 7),
  neuterPast: Word('перестреливалось', 7),
  pluralPast: Word('перестреливались', 7),
  imperativeInformal: Word('перестреливайся', 7),
  imperativeFormal: Word('перестреливайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перестреливаться.name.text, перестреливаться);

export { перестреливаться };