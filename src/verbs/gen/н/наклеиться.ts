import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклеиться: PerfectVerb = {
  name: Word('наклеиться', 4),
  singular1stPerson: Word('наклеюсь', 4),
  singular2ndPerson: Word('наклеишься', 4),
  singular3rdPerson: Word('наклеится', 4),
  plural1stPerson: Word('наклеимся', 4),
  plural2ndPerson: Word('наклеитесь', 4),
  plural3rdPerson: Word('наклеятся', 4),
  masculinePast: Word('наклеился', 4),
  femininePast: Word('наклеилась', 4),
  neuterPast: Word('наклеилось', 4),
  pluralPast: Word('наклеились', 4),
  imperativeInformal: Word('наклейся', 4),
  imperativeFormal: Word('наклейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наклеиться.name.text, наклеиться);

export { наклеиться };