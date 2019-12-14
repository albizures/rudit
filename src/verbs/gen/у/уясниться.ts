import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уясниться: PerfectVerb = {
  name: Word('уясниться', 4),
  singular1stPerson: Word('уяснюсь', 4),
  singular2ndPerson: Word('уяснишься', 4),
  singular3rdPerson: Word('уяснится', 4),
  plural1stPerson: Word('уяснимся', 4),
  plural2ndPerson: Word('уяснитесь', 4),
  plural3rdPerson: Word('уяснятся', 4),
  masculinePast: Word('уяснился', 4),
  femininePast: Word('уяснилась', 4),
  neuterPast: Word('уяснилось', 4),
  pluralPast: Word('уяснились', 4),
  imperativeInformal: Word('уяснись', 4),
  imperativeFormal: Word('уяснитесь', 4),
  imperfect: [],
};

perfectVerbs.set(уясниться.name.text, уясниться);

export { уясниться };