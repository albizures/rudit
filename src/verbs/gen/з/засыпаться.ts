import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засыпаться: PerfectVerb = {
  name: Word('засыпаться', 5),
  singular1stPerson: Word('засыпаюсь', 5),
  singular2ndPerson: Word('засыпаешься', 5),
  singular3rdPerson: Word('засыпается', 5),
  plural1stPerson: Word('засыпаемся', 5),
  plural2ndPerson: Word('засыпаетесь', 5),
  plural3rdPerson: Word('засыпаются', 5),
  masculinePast: Word('засыпался', 5),
  femininePast: Word('засыпалась', 5),
  neuterPast: Word('засыпалось', 5),
  pluralPast: Word('засыпались', 5),
  imperativeInformal: Word('засыпайся', 5),
  imperativeFormal: Word('засыпайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(засыпаться.name.text, засыпаться);

export { засыпаться };