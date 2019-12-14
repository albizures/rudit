import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потупиться: PerfectVerb = {
  name: Word('потупиться', 3),
  singular1stPerson: Word('потуплюсь', 3),
  singular2ndPerson: Word('потупишься', 3),
  singular3rdPerson: Word('потупится', 3),
  plural1stPerson: Word('потупимся', 3),
  plural2ndPerson: Word('потупитесь', 3),
  plural3rdPerson: Word('потупятся', 3),
  masculinePast: Word('потупился', 3),
  femininePast: Word('потупилась', 3),
  neuterPast: Word('потупилось', 3),
  pluralPast: Word('потупились', 3),
  imperativeInformal: Word('потупься', 3),
  imperativeFormal: Word('потупьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(потупиться.name.text, потупиться);

export { потупиться };