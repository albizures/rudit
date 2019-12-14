import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влопаться: PerfectVerb = {
  name: Word('влопаться', 2),
  singular1stPerson: Word('влопаюсь', 2),
  singular2ndPerson: Word('влопаешься', 2),
  singular3rdPerson: Word('влопается', 2),
  plural1stPerson: Word('влопаемся', 2),
  plural2ndPerson: Word('влопаетесь', 2),
  plural3rdPerson: Word('влопаются', 2),
  masculinePast: Word('влопался', 2),
  femininePast: Word('влопалась', 2),
  neuterPast: Word('влопалось', 2),
  pluralPast: Word('влопались', 2),
  imperativeInformal: Word('влопайся', 2),
  imperativeFormal: Word('влопайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(влопаться.name.text, влопаться);

export { влопаться };