import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продавливаться: PerfectVerb = {
  name: Word('продавливаться', 4),
  singular1stPerson: Word('продавливаюсь', 4),
  singular2ndPerson: Word('продавливаешься', 4),
  singular3rdPerson: Word('продавливается', 4),
  plural1stPerson: Word('продавливаемся', 4),
  plural2ndPerson: Word('продавливаетесь', 4),
  plural3rdPerson: Word('продавливаются', 4),
  masculinePast: Word('продавливался', 4),
  femininePast: Word('продавливалась', 4),
  neuterPast: Word('продавливалось', 4),
  pluralPast: Word('продавливались', 4),
  imperativeInformal: Word('продавливайся', 4),
  imperativeFormal: Word('продавливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(продавливаться.name.text, продавливаться);

export { продавливаться };