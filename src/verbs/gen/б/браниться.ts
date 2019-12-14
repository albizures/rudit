import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const браниться: PerfectVerb = {
  name: Word('браниться', 4),
  singular1stPerson: Word('бранюсь', 4),
  singular2ndPerson: Word('бранишься', 4),
  singular3rdPerson: Word('бранится', 4),
  plural1stPerson: Word('бранимся', 4),
  plural2ndPerson: Word('бранитесь', 4),
  plural3rdPerson: Word('бранятся', 4),
  masculinePast: Word('бранился', 4),
  femininePast: Word('бранилась', 4),
  neuterPast: Word('бранилось', 4),
  pluralPast: Word('бранились', 4),
  imperativeInformal: Word('бранись', 4),
  imperativeFormal: Word('бранитесь', 4),
  imperfect: ['побраниться'],
};

perfectVerbs.set(браниться.name.text, браниться);

export { браниться };