import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемещаться: PerfectVerb = {
  name: Word('перемещаться', 7),
  singular1stPerson: Word('перемещаюсь', 7),
  singular2ndPerson: Word('перемещаешься', 7),
  singular3rdPerson: Word('перемещается', 7),
  plural1stPerson: Word('перемещаемся', 7),
  plural2ndPerson: Word('перемещаетесь', 7),
  plural3rdPerson: Word('перемещаются', 7),
  masculinePast: Word('перемещался', 7),
  femininePast: Word('перемещалась', 7),
  neuterPast: Word('перемещалось', 7),
  pluralPast: Word('перемещались', 7),
  imperativeInformal: Word('перемещайся', 7),
  imperativeFormal: Word('перемещайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перемещаться.name.text, перемещаться);

export { перемещаться };