import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопровождаться: PerfectVerb = {
  name: Word('сопровождаться', 9),
  singular1stPerson: Word('сопровождаюсь', 9),
  singular2ndPerson: Word('сопровождаешься', 9),
  singular3rdPerson: Word('сопровождается', 9),
  plural1stPerson: Word('сопровождаемся', 9),
  plural2ndPerson: Word('сопровождаетесь', 9),
  plural3rdPerson: Word('сопровождаются', 9),
  masculinePast: Word('сопровождался', 9),
  femininePast: Word('сопровождалась', 9),
  neuterPast: Word('сопровождалось', 9),
  pluralPast: Word('сопровождались', 9),
  imperativeInformal: Word('сопровождайся', 9),
  imperativeFormal: Word('сопровождайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(сопровождаться.name.text, сопровождаться);

export { сопровождаться };