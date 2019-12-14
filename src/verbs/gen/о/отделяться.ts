import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отделяться: PerfectVerb = {
  name: Word('отделяться', 5),
  singular1stPerson: Word('отделяюсь', 5),
  singular2ndPerson: Word('отделяешься', 5),
  singular3rdPerson: Word('отделяется', 5),
  plural1stPerson: Word('отделяемся', 5),
  plural2ndPerson: Word('отделяетесь', 5),
  plural3rdPerson: Word('отделяются', 5),
  masculinePast: Word('отделялся', 5),
  femininePast: Word('отделялась', 5),
  neuterPast: Word('отделялось', 5),
  pluralPast: Word('отделялись', 5),
  imperativeInformal: Word('отделяйся', 5),
  imperativeFormal: Word('отделяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отделяться.name.text, отделяться);

export { отделяться };