import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устроиться: PerfectVerb = {
  name: Word('устроиться', 4),
  singular1stPerson: Word('устроюсь', 4),
  singular2ndPerson: Word('устроишься', 4),
  singular3rdPerson: Word('устроится', 4),
  plural1stPerson: Word('устроимся', 4),
  plural2ndPerson: Word('устроитесь', 4),
  plural3rdPerson: Word('устроятся', 4),
  masculinePast: Word('устроился', 4),
  femininePast: Word('устроилась', 4),
  neuterPast: Word('устроилось', 4),
  pluralPast: Word('устроились', 4),
  imperativeInformal: Word('устройся', 4),
  imperativeFormal: Word('устройтесь', 4),
  imperfect: [],
};

perfectVerbs.set(устроиться.name.text, устроиться);

export { устроиться };