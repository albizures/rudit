import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегружаться: PerfectVerb = {
  name: Word('перегружаться', 8),
  singular1stPerson: Word('перегружаюсь', 8),
  singular2ndPerson: Word('перегружаешься', 8),
  singular3rdPerson: Word('перегружается', 8),
  plural1stPerson: Word('перегружаемся', 8),
  plural2ndPerson: Word('перегружаетесь', 8),
  plural3rdPerson: Word('перегружаются', 8),
  masculinePast: Word('перегружался', 8),
  femininePast: Word('перегружалась', 8),
  neuterPast: Word('перегружалось', 8),
  pluralPast: Word('перегружались', 8),
  imperativeInformal: Word('перегружайся', 8),
  imperativeFormal: Word('перегружайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(перегружаться.name.text, перегружаться);

export { перегружаться };