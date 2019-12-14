import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перецарапаться: PerfectVerb = {
  name: Word('перецарапаться', 7),
  singular1stPerson: Word('перецарапаюсь', 7),
  singular2ndPerson: Word('перецарапаешься', 7),
  singular3rdPerson: Word('перецарапается', 7),
  plural1stPerson: Word('перецарапаемся', 7),
  plural2ndPerson: Word('перецарапаетесь', 7),
  plural3rdPerson: Word('перецарапаются', 7),
  masculinePast: Word('перецарапался', 7),
  femininePast: Word('перецарапалась', 7),
  neuterPast: Word('перецарапалось', 7),
  pluralPast: Word('перецарапались', 7),
  imperativeInformal: Word('перецарапайся', 7),
  imperativeFormal: Word('перецарапайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перецарапаться.name.text, перецарапаться);

export { перецарапаться };