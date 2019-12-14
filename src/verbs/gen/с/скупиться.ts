import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скупиться: PerfectVerb = {
  name: Word('скупиться', 4),
  singular1stPerson: Word('скуплюсь', 5),
  singular2ndPerson: Word('скупишься', 4),
  singular3rdPerson: Word('скупится', 4),
  plural1stPerson: Word('скупимся', 4),
  plural2ndPerson: Word('скупитесь', 4),
  plural3rdPerson: Word('скупятся', 4),
  masculinePast: Word('скупился', 4),
  femininePast: Word('скупилась', 4),
  neuterPast: Word('скупилось', 4),
  pluralPast: Word('скупились', 4),
  imperativeInformal: Word('скупись', 4),
  imperativeFormal: Word('скупитесь', 4),
  imperfect: [],
};

perfectVerbs.set(скупиться.name.text, скупиться);

export { скупиться };