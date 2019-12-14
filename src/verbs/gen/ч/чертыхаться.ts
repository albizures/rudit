import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чертыхаться: PerfectVerb = {
  name: Word('чертыхаться', 6),
  singular1stPerson: Word('чертыхаюсь', 6),
  singular2ndPerson: Word('чертыхаешься', 6),
  singular3rdPerson: Word('чертыхается', 6),
  plural1stPerson: Word('чертыхаемся', 6),
  plural2ndPerson: Word('чертыхаетесь', 6),
  plural3rdPerson: Word('чертыхаются', 6),
  masculinePast: Word('чертыхался', 6),
  femininePast: Word('чертыхалась', 6),
  neuterPast: Word('чертыхалось', 6),
  pluralPast: Word('чертыхались', 6),
  imperativeInformal: Word('чертыхайся', 6),
  imperativeFormal: Word('чертыхайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(чертыхаться.name.text, чертыхаться);

export { чертыхаться };