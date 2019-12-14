import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сделаться: PerfectVerb = {
  name: Word('сделаться', 2),
  singular1stPerson: Word('сделаюсь', 2),
  singular2ndPerson: Word('сделаешься', 2),
  singular3rdPerson: Word('сделается', 2),
  plural1stPerson: Word('сделаемся', 2),
  plural2ndPerson: Word('сделаетесь', 2),
  plural3rdPerson: Word('сделаются', 2),
  masculinePast: Word('сделался', 2),
  femininePast: Word('сделалась', 2),
  neuterPast: Word('сделалось', 2),
  pluralPast: Word('сделались', 2),
  imperativeInformal: Word('сделайся', 2),
  imperativeFormal: Word('сделайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сделаться.name.text, сделаться);

export { сделаться };