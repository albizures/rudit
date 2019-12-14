import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекупаться: PerfectVerb = {
  name: Word('перекупаться', 7),
  singular1stPerson: Word('перекупаюсь', 7),
  singular2ndPerson: Word('перекупаешься', 7),
  singular3rdPerson: Word('перекупается', 7),
  plural1stPerson: Word('перекупаемся', 7),
  plural2ndPerson: Word('перекупаетесь', 7),
  plural3rdPerson: Word('перекупаются', 7),
  masculinePast: Word('перекупался', 7),
  femininePast: Word('перекупалась', 7),
  neuterPast: Word('перекупалось', 7),
  pluralPast: Word('перекупались', 7),
  imperativeInformal: Word('перекупайся', 7),
  imperativeFormal: Word('перекупайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перекупаться.name.text, перекупаться);

export { перекупаться };