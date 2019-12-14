import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распадаться: PerfectVerb = {
  name: Word('распадаться', 6),
  singular1stPerson: Word('распадаюсь', 6),
  singular2ndPerson: Word('распадаешься', 6),
  singular3rdPerson: Word('распадается', 6),
  plural1stPerson: Word('распадаемся', 6),
  plural2ndPerson: Word('распадаетесь', 6),
  plural3rdPerson: Word('распадаются', 6),
  masculinePast: Word('распадался', 6),
  femininePast: Word('распадалась', 6),
  neuterPast: Word('распадалось', 6),
  pluralPast: Word('распадались', 6),
  imperativeInformal: Word('распадайся', 6),
  imperativeFormal: Word('распадайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(распадаться.name.text, распадаться);

export { распадаться };