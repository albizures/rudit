import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устремиться: PerfectVerb = {
  name: Word('устремиться', 6),
  singular1stPerson: Word('устремлюсь', 7),
  singular2ndPerson: Word('устремишься', 6),
  singular3rdPerson: Word('устремится', 6),
  plural1stPerson: Word('устремимся', 6),
  plural2ndPerson: Word('устремитесь', 6),
  plural3rdPerson: Word('устремятся', 6),
  masculinePast: Word('устремился', 6),
  femininePast: Word('устремилась', 6),
  neuterPast: Word('устремилось', 6),
  pluralPast: Word('устремились', 6),
  imperativeInformal: Word('устремись', 6),
  imperativeFormal: Word('устремитесь', 6),
  imperfect: [],
};

perfectVerbs.set(устремиться.name.text, устремиться);

export { устремиться };