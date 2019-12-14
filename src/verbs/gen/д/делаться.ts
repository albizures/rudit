import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const делаться: PerfectVerb = {
  name: Word('делаться', 1),
  singular1stPerson: Word('делаюсь', 1),
  singular2ndPerson: Word('делаешься', 1),
  singular3rdPerson: Word('делается', 1),
  plural1stPerson: Word('делаемся', 1),
  plural2ndPerson: Word('делаетесь', 1),
  plural3rdPerson: Word('делаются', 1),
  masculinePast: Word('делался', 1),
  femininePast: Word('делалась', 1),
  neuterPast: Word('делалось', 1),
  pluralPast: Word('делались', 1),
  imperativeInformal: Word('делайся', 1),
  imperativeFormal: Word('делайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(делаться.name.text, делаться);

export { делаться };