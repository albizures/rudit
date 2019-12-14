import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отделаться: PerfectVerb = {
  name: Word('отделаться', 3),
  singular1stPerson: Word('отделаюсь', 3),
  singular2ndPerson: Word('отделаешься', 3),
  singular3rdPerson: Word('отделается', 3),
  plural1stPerson: Word('отделаемся', 3),
  plural2ndPerson: Word('отделаетесь', 3),
  plural3rdPerson: Word('отделаются', 3),
  masculinePast: Word('отделался', 3),
  femininePast: Word('отделалась', 3),
  neuterPast: Word('отделалось', 3),
  pluralPast: Word('отделались', 3),
  imperativeInformal: Word('отделайся', 3),
  imperativeFormal: Word('отделайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отделаться.name.text, отделаться);

export { отделаться };