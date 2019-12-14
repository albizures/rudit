import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const породниться: PerfectVerb = {
  name: Word('породниться', 6),
  singular1stPerson: Word('породнюсь', 6),
  singular2ndPerson: Word('породнишься', 6),
  singular3rdPerson: Word('породнится', 6),
  plural1stPerson: Word('породнимся', 6),
  plural2ndPerson: Word('породнитесь', 6),
  plural3rdPerson: Word('породнятся', 6),
  masculinePast: Word('породнился', 6),
  femininePast: Word('породнилась', 6),
  neuterPast: Word('породнилось', 6),
  pluralPast: Word('породнились', 6),
  imperativeInformal: Word('породнись', 6),
  imperativeFormal: Word('породнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(породниться.name.text, породниться);

export { породниться };