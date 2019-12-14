import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спускаться: PerfectVerb = {
  name: Word('спускаться', 5),
  singular1stPerson: Word('спускаюсь', 5),
  singular2ndPerson: Word('спускаешься', 5),
  singular3rdPerson: Word('спускается', 5),
  plural1stPerson: Word('спускаемся', 5),
  plural2ndPerson: Word('спускаетесь', 5),
  plural3rdPerson: Word('спускаются', 5),
  masculinePast: Word('спускался', 5),
  femininePast: Word('спускалась', 5),
  neuterPast: Word('спускалось', 5),
  pluralPast: Word('спускались', 5),
  imperativeInformal: Word('спускайся', 5),
  imperativeFormal: Word('спускайтесь', 5),
  imperfect: ['спуститься'],
};

perfectVerbs.set(спускаться.name.text, спускаться);

export { спускаться };