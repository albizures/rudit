import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облупливаться: PerfectVerb = {
  name: Word('облупливаться', 3),
  singular1stPerson: Word('облупливаюсь', 3),
  singular2ndPerson: Word('облупливаешься', 3),
  singular3rdPerson: Word('облупливается', 3),
  plural1stPerson: Word('облупливаемся', 3),
  plural2ndPerson: Word('облупливаетесь', 3),
  plural3rdPerson: Word('облупливаются', 3),
  masculinePast: Word('облупливался', 3),
  femininePast: Word('облупливалась', 3),
  neuterPast: Word('облупливалось', 3),
  pluralPast: Word('облупливались', 3),
  imperativeInformal: Word('облупливайся', 3),
  imperativeFormal: Word('облупливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(облупливаться.name.text, облупливаться);

export { облупливаться };