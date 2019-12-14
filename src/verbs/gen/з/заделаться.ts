import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заделаться: PerfectVerb = {
  name: Word('заделаться', 3),
  singular1stPerson: Word('заделаюсь', 3),
  singular2ndPerson: Word('заделаешься', 3),
  singular3rdPerson: Word('заделается', 3),
  plural1stPerson: Word('заделаемся', 3),
  plural2ndPerson: Word('заделаетесь', 3),
  plural3rdPerson: Word('заделаются', 3),
  masculinePast: Word('заделался', 3),
  femininePast: Word('заделалась', 3),
  neuterPast: Word('заделалось', 3),
  pluralPast: Word('заделались', 3),
  imperativeInformal: Word('заделайся', 3),
  imperativeFormal: Word('заделайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(заделаться.name.text, заделаться);

export { заделаться };