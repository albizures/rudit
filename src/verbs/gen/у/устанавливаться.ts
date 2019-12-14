import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устанавливаться: PerfectVerb = {
  name: Word('устанавливаться', 5),
  singular1stPerson: Word('устанавливаюсь', 5),
  singular2ndPerson: Word('устанавливаешься', 5),
  singular3rdPerson: Word('устанавливается', 5),
  plural1stPerson: Word('устанавливаемся', 5),
  plural2ndPerson: Word('устанавливаетесь', 5),
  plural3rdPerson: Word('устанавливаются', 5),
  masculinePast: Word('устанавливался', 5),
  femininePast: Word('устанавливалась', 5),
  neuterPast: Word('устанавливалось', 5),
  pluralPast: Word('устанавливались', 5),
  imperativeInformal: Word('устанавливайся', 5),
  imperativeFormal: Word('устанавливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(устанавливаться.name.text, устанавливаться);

export { устанавливаться };