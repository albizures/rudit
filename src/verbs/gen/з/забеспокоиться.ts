import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забеспокоиться: PerfectVerb = {
  name: Word('забеспокоиться', 8),
  singular1stPerson: Word('забеспокоюсь', 8),
  singular2ndPerson: Word('забеспокоишься', 8),
  singular3rdPerson: Word('забеспокоится', 8),
  plural1stPerson: Word('забеспокоимся', 8),
  plural2ndPerson: Word('забеспокоитесь', 8),
  plural3rdPerson: Word('забеспокоятся', 8),
  masculinePast: Word('забеспокоился', 8),
  femininePast: Word('забеспокоилась', 8),
  neuterPast: Word('забеспокоилось', 8),
  pluralPast: Word('забеспокоились', 8),
  imperativeInformal: Word('забеспокойся', 8),
  imperativeFormal: Word('забеспокойтесь', 8),
  imperfect: [],
};

perfectVerbs.set(забеспокоиться.name.text, забеспокоиться);

export { забеспокоиться };